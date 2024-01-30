let javaScriptDescription = "JavaScript - мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.";
javaScriptDescription = javaScriptDescription.slice(0, Math.floor(javaScriptDescription.length/2));
javaScriptDescription = javaScriptDescription.replaceAll('А', 'а');
javaScriptDescription = javaScriptDescription.replaceAll(' ', '');
javaScriptDescription = javaScriptDescription + javaScriptDescription + javaScriptDescription;
console.log(Math.floor(javaScriptDescription.length/2), javaScriptDescription);