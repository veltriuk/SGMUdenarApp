module.exports ={
    //funciones del controlador
    index : function(req, res, next) {
        res.render('index', {title: 'SGM Udenar'});
    }
}