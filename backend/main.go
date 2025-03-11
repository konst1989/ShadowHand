package main

import (
    "fmt"
    "log"
    "net/http"
    "shadowhand/routes"
    "github.com/labstack/echo/v4"
)

func main() {
    e := echo.New()
    e.POST("/api/bot/execute", routes.ExecuteBot)

    fmt.Println("ShadowHand API запущен на порту 8000")
    log.Fatal(e.Start(":8000"))
}