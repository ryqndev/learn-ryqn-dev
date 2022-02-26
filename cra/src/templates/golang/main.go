package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/gomarkdown/markdown"
	"github.com/gomarkdown/markdown/parser"

	handlers "github.com/gorilla/handlers"
	mux "github.com/gorilla/mux"

	routes "ryqn.dev/golang-cookbook/routes"
)

func main() {
	router := mux.NewRouter() // create router object

	// enable CORS
	cors := handlers.CORS(
		handlers.AllowedHeaders([]string{"content-type"}),
		handlers.AllowedOrigins([]string{"*"}),
		handlers.AllowCredentials(),
	)

	// Default endpoint return README.md file
	router.HandleFunc("/", func(rw http.ResponseWriter, r *http.Request) {
		content, _ := ioutil.ReadFile("./README.md")
		parsers := parser.NewWithExtensions(parser.CommonExtensions | parser.AutoHeadingIDs)
		html := string(markdown.ToHTML([]byte(content), parsers, nil))

		fmt.Fprintf(rw, "<!DOCTYPE html>\n<html><body>%s</body></html>", html)
	}).Methods("GET")

	routes.SetupAllRoutes(router) // All other routes initialized in 'routes' package

	// initialize services

	// Start our backend server and host it on port 5000
	log.Fatal(http.ListenAndServe(":5000", cors(router)))
}
