import { createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/_profile/block")({
  beforeLoad: () => {
    throw redirect({
      to: "/blocks",
    })
  },
})
