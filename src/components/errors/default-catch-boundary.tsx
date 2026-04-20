import type { ErrorComponentProps } from "@tanstack/react-router"
import { Link, rootRouteId, useMatch, useRouter } from "@tanstack/react-router"
import { AlertCircle, ChevronLeft, Home, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
	const router = useRouter()
	const isRoot = useMatch({
		strict: false,
		select: (state) => state.id === rootRouteId,
	})

	console.error("Caught error in DefaultCatchBoundary: ", error)

	const errorMessage =
		error instanceof Error ? error.message : "An unknown error occurred"
	const errorStack = error instanceof Error ? error.stack : undefined

	return (
		<div className="flex min-h-screen flex-1 flex-col items-center justify-center p-6 text-center bg-background/50">
			<Dialog open={true}>
				<DialogContent
					showCloseButton={false}
					className="sm:max-w-2xl max-h-[85vh] flex flex-col p-0 overflow-hidden border-destructive/20 shadow-2xl dark:shadow-red-900/10"
					onInteractOutside={(e) => e.preventDefault()}
					onEscapeKeyDown={(e) => e.preventDefault()}
				>
					<div className="bg-destructive/10 dark:bg-destructive/20 p-4 border-b border-destructive/20">
						<DialogHeader className="text-left gap-1 space-y-0">
							<DialogTitle className="flex items-center gap-2 text-destructive font-mono text-lg font-bold">
								<AlertCircle className="h-5 w-5" />
								Unhandled Runtime Error
							</DialogTitle>
							<DialogDescription className="text-destructive/80 font-medium">
								The application encountered an unexpected error.
							</DialogDescription>
						</DialogHeader>
					</div>

					<div className="flex-1 overflow-auto bg-zinc-950 p-6 text-left shadow-inner custom-scrollbar relative">
						<div className="absolute top-2 right-4 opacity-50 text-xs text-zinc-500 font-mono">
							Trace
						</div>
						<h3 className="text-red-400 font-mono text-sm md:text-base font-semibold mb-4 leading-relaxed">
							{errorMessage}
						</h3>
						{errorStack && (
							<pre className="text-zinc-400 font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
								{errorStack}
							</pre>
						)}
					</div>

					<DialogFooter className="bg-muted/50 p-4 border-t sm:justify-between items-center sm:items-end flex-wrap gap-4 sm:gap-2 m-0">
						<div className="text-xs text-muted-foreground/70 text-left">
							Check the browser console for more details.
						</div>
						<div className="flex items-center gap-2 w-full sm:w-auto">
							{!isRoot ? (
								<Button
									variant="outline"
									onClick={(e) => {
										e.preventDefault()
										window.history.back()
									}}
									className="flex-1 sm:flex-none"
								>
									<ChevronLeft className="h-4 w-4 mr-2" />
									Go Back
								</Button>
							) : (
								<Button
									variant="outline"
									asChild
									className="flex-1 sm:flex-none"
								>
									<Link to="/">
										<Home className="h-4 w-4 mr-2" />
										Home
									</Link>
								</Button>
							)}

							<Button
								variant="default"
								onClick={() => {
									router.invalidate()
								}}
								className="flex-1 flex items-center justify-center sm:flex-none bg-red-700 text-white hover:bg-red-800"
							>
								<RefreshCw className="mr-2" />
								Try Again
							</Button>
						</div>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}
