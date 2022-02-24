package user

import "encoding/json"

type UserLoginFields struct {
	Username string `json:"username"`
	Password string `json:"password"`
}
type UserSuccessfulAuthResponse struct {
	Success         bool   `json:"success"`
	Username        string `json:"username"`
	Token           string `json:"_token"`
	TokenExpiration int    `json:"_tokenExpiration"`
}

func CreateUser(userDetails *UserLoginFields) []byte {
	response := UserSuccessfulAuthResponse{true, "", "", 1619925494169}
	responseString, _ := json.Marshal(response)
	return responseString
}

func AuthenticateUser(userDetails *UserLoginFields) []byte {
	response := UserSuccessfulAuthResponse{true, "", "", 1619925494169}
	responseString, _ := json.Marshal(response)
	return responseString
}
