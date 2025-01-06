package main

import (
	"crud-template-backend/pkg/auth"
	"fmt"
)

func main() {
	fmt.Println(auth.GenerateRandomKey())
}
