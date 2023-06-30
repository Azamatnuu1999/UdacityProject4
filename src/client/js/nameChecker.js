function checkForName(inputText) {
    console.log("::: Running checkURL :::", inputText)
    const httpCheck = /^http:\/\/|^https:\/\//i
    const spaceCheck = /\s/
    return (httpCheck.test(inputText) && !spaceCheck.test(inputText))
}
export { checkForName }