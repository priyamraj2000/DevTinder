const AdminAuth= (req, res, next) => {
    console.log("Auth is getting checked!!");
    const token= "xyz";
    const isToken = token === "xyz";
    if(!isToken){
        res.status(404).send("Unauthorized Admin Auth");
    }else{
        next();
    }
}

const userAuth = (req, res, next) => {
    console.log("User Auth is getting checked!!");
    const token = "xyz";
    const isToken = token === "xyz";
    if(!isToken){
        res.status(404).send("Unauthorised User Auth")
    }
    else{
        next();
    }
}

module.exports = {
   AdminAuth,
   userAuth
}