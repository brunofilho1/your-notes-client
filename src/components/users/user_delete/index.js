import React, { useState } from 'react';
import { Button } from "rbx";
import UsersService from '../../../services/users';
import { Redirect } from "react-router-dom";

function UserDelete() {
  const [redirectToHome, setRedirectToHome] = useState(false);

  const deleteUser = async () => {
    if (window.confirm('Você tem certeza que deseja apagar essa conta?')){
      UsersService.delete()
      setRedirectToHome(true)
    }
  }

  if(redirectToHome == true)
    return <Redirect to={{pathname: "/"}}/>

  return(
    <Button color="danger" onClick={() => deleteUser()}>
      Excluir conta
    </Button>
  )
}

export default UserDelete;