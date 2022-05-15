export const error404 = (req, res) => {
    try {
        res.status (200).json({
            msg: 'Error 404 - Page not found.'
        })
    } catch (error) {
        res.status(500).json({
            msg: error
        });    
    };
};