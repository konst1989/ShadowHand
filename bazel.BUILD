load("@io_bazel_rules_docker//container:container.bzl", "container_image")
container_image(
    name = "shadowhand_image",
    base = "gcr.io/distroless/base",
    files = ["backend/main"],
)