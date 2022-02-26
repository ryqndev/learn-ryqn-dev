package routes

import (
	mux "github.com/gorilla/mux"
)

func SetupAllRoutes(router *mux.Router) {
	SetupUserRoutes(router)
	SetupRecipeRoutes(router)
}
