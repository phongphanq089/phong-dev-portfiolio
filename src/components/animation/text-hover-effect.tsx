"use client"
import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

export const TextHoverEffect = ({
	text,
	duration,
}: {
	text: string
	duration?: number
	automatic?: boolean
}) => {
	const svgRef = useRef<SVGSVGElement>(null)
	const textRef = useRef<SVGTextElement>(null)
	const [cursor, setCursor] = useState({ x: 0, y: 0 })
	const [hovered, setHovered] = useState(false)

	// Place text far from origin so bbox is always fully in positive space.
	const TX = 5000
	const TY = 5000

	// Store viewBox as object so we can map screen coords → SVG user space for the gradient.
	const [vb, setVb] = useState({ x: TX - 150, y: TY - 50, w: 300, h: 100 })

	// Mask position in absolute SVG user-space coordinates (not percentages).
	// gradientUnits="userSpaceOnUse" requires absolute coords, not % strings.
	const [maskPos, setMaskPos] = useState({ cx: TX, cy: TY })

	useEffect(() => {
		const measure = () => {
			if (!textRef.current) return
			try {
				const b = textRef.current.getBBox()
				if (b.width > 0 && b.height > 0) {
					const pad = 2
					setVb({
						x: b.x - pad,
						y: b.y - pad,
						w: b.width + pad * 2,
						h: b.height + pad * 2,
					})
				}
			} catch (_) {
				/* keep default */
			}
		}
		measure()
		document.fonts.ready.then(measure)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		if (!svgRef.current) return
		const rect = svgRef.current.getBoundingClientRect()
		// Map screen pixel position to SVG user-space coordinates.
		const fracX = (cursor.x - rect.left) / rect.width
		const fracY = (cursor.y - rect.top) / rect.height
		setMaskPos({
			cx: vb.x + fracX * vb.w,
			cy: vb.y + fracY * vb.h,
		})
	}, [cursor, vb])

	const textProps = {
		x: TX,
		y: TY,
		textAnchor: "middle" as const,
		dominantBaseline: "middle" as const,
		strokeWidth: "0.7",
		fontSize: "80",
		fontFamily: "helvetica, sans-serif",
		fontWeight: "bold",
	}

	// Gradient radius: ~30% of viewBox width so it covers a good area.
	const gradR = vb.w * 0.3

	return (
		<svg
			ref={svgRef}
			width="100%"
			height="100%"
			viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`}
			preserveAspectRatio="xMidYMid meet"
			xmlns="http://www.w3.org/2000/svg"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
			className="select-none"
			role="img"
		>
			<title className="hidden">{text}</title>
			<defs>
				{/* Colorful gradient that fills the hovered text */}
				<linearGradient
					id="textGradient"
					gradientUnits="userSpaceOnUse"
					x1={vb.x}
					y1={TY}
					x2={vb.x + vb.w}
					y2={TY}
				>
					{hovered && (
						<>
							<stop offset="0%" stopColor="#eab308" />
							<stop offset="25%" stopColor="#ef4444" />
							<stop offset="50%" stopColor="#3b82f6" />
							<stop offset="75%" stopColor="#06b6d4" />
							<stop offset="100%" stopColor="#8b5cf6" />
						</>
					)}
				</linearGradient>

				{/* Radial mask that follows the cursor – coords in SVG user space */}
				<motion.radialGradient
					id="revealMask"
					gradientUnits="userSpaceOnUse"
					r={gradR}
					initial={{ cx: TX, cy: TY }}
					animate={maskPos}
					transition={{ duration: duration ?? 0, ease: "easeOut" }}
				>
					<stop offset="0%" stopColor="white" />
					<stop offset="100%" stopColor="black" />
				</motion.radialGradient>

				<mask id="textMask">
					<rect
						x={vb.x - 1000}
						y={vb.y - 1000}
						width={vb.w + 2000}
						height={vb.h + 2000}
						fill="url(#revealMask)"
					/>
				</mask>
			</defs>

			{/* Invisible measurement ref with same font props */}
			<text ref={textRef} {...textProps} style={{ visibility: "hidden" }}>
				{text}
			</text>

			{/* Outline – dims in/out on hover */}
			<text
				{...textProps}
				className="fill-transparent stroke-neutral-600 dark:stroke-slate-700"
				style={{ opacity: hovered ? 0.7 : 0 }}
			>
				{text}
			</text>

			{/* Animated draw-on stroke */}
			<motion.text
				{...textProps}
				className="fill-transparent stroke-neutral-600 dark:stroke-slate-700"
				initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
				animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
				transition={{ duration: 4, ease: "easeInOut" }}
			>
				{text}
			</motion.text>

			{/* Colorful gradient revealed by cursor mask */}
			<text
				{...textProps}
				stroke="url(#textGradient)"
				mask="url(#textMask)"
				className="fill-transparent"
			>
				{text}
			</text>
		</svg>
	)
}
