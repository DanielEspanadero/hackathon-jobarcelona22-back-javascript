export const signUp = (req, res)=>{
    try {
        res.status(200).json({
            msg:'Hola'
        })
    } catch (error) {
        res.status(500).json({
            msg:error
        });
    };
};