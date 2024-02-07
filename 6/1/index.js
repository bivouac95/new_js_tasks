function getName1(Name){
    return `Имя равно ${Name}.`;
}

const getName2 = function (Name) {
    return `Имя равно ${Name}.`;
}

const getName3 = (Name) => `Имя равно ${Name}.`;

console.log(getName1('Ванек'), getName2('Ванек'), getName3('Ванек'));