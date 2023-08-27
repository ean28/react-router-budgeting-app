import { redirect } from "react-router-dom";
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";

export async function logoutAction(){
    //delete the user
    deleteItem({
        key: "userName"
    })
    toast.success("Success")
    //redirect them to main page
    return redirect("/")
}