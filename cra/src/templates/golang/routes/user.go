package routes

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"

	mux "github.com/gorilla/mux"

	user "ryqn.dev/golang-cookbook/services/user"
)

func SetupUserRoutes(router *mux.Router) {
	router.HandleFunc("/login", func(rw http.ResponseWriter, r *http.Request) {
		fields, err := extractLoginFields(rw, r)
		if err == nil {
			fmt.Fprint(rw, string(user.AuthenticateUser(fields)))
		}
	}).Methods("POST")

	router.HandleFunc("/signup", func(rw http.ResponseWriter, r *http.Request) {
		fields, err := extractLoginFields(rw, r)
		if err == nil {
			fmt.Fprint(rw, string(user.CreateUser(fields)))
		}
	}).Methods("POST")
}

func extractLoginFields(rw http.ResponseWriter, r *http.Request) (*user.UserLoginFields, error) {
	var fields user.UserLoginFields
	if err := json.NewDecoder(r.Body).Decode(&fields); err != nil {
		rw.WriteHeader(401)
		fmt.Fprint(rw, `{"success": false, "message": "AUTH_FAILED"}`)
		return nil, errors.New("bad JSON formatting")
	}
	return &fields, nil
}
