import React from 'react'

function Validation(values) {
  let error={}
  const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

  if(values.username===""){
    error.username="Name should not be empty"
  }
  else{
    error.username=""
  }

  if(values.email===""){
    error.email="Email should not be empty"
  }
  else if(!email_pattern.test(values.email)){
    error.email="Email didn't match"
  }
  else{
    error.email=""
  }

  if(values.password===""){
    error.password="Password should not be empty"
  }
  else if(!password_pattern.test(values.password)){
    error.password="Password didn't match {Password must contain atleast 1 small letter, 1 capital letter, 1 numeric value and no other special characters}"

  }
  else{
    error.password=""
  }
  return error;
}

export default Validation