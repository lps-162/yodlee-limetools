function formatJoiValidationErrors(result) {
    let errors = [];

    //console.log(JSON.stringify(result.error.details));

    if (result.error) {
        result.error.details.forEach(function(detail) {
            errors.push(detail.path + ' : ' + detail.message);
        });
        return errors;
    };
}

module.exports = {
    formatJoiValidationErrors: formatJoiValidationErrors
};