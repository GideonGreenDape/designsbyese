function TwodigitLocaleStringGenerator(value) {
    let result = value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return result;
}

export default TwodigitLocaleStringGenerator;