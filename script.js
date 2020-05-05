$(document).ready(function(){
    $('#typewriteText').typewrite({
        actions: [
            {type: 'Hello.'},
            {type: '<br>'},
            {type: 'Welcome to Instagram'},
            {delay: 1500},
            {remove: {num: 3, type: 'stepped'}},
            {select: {from: 20, to: 26}},
            {delay: 2000},
            {remove: {num: 6, type: 'whole'}},
            {delay: 300},
            {type: 'Outstagram.'},
            {type: '<br>'},
            {type: '<br>'},
            {delay: 1500},
            {type: 'This is where the true documentation lies... '}
        ]
    });
});

$(document).ready(function(){
    $('#typewriteText2').typewrite({
      speed: 20,
      selectedText: '#cf1f1f',

        actions: [
            {type: 'Social media is a big part of many teens\' lives.'},
            {type: '<br>'},
            {delay: 1500},
            {type: 'It can provide them with a platform to connect'},
            {type: '<br>'},
            {type: '<br>'},
            {delay: 1500},
            {type: 'BUT'},
            {type: '<br>'},
            {type: '<br>'},
            {delay: 1500},
            {type: 'it can also affect their self-esteem by presenting boys and girls with their definition of what is '},
            {type: '<br>'},
            {type: '<br>'},
            {delay: 1500},
            {type: ' “perfect” or “beautiful”. '},
            {select: {from:218, to: 243}}
        ]
    });
});

$(document).ready(function(){
    $('#typewriteText3').typewrite({
      speed: 20,
      selectedText: '#cf1f1f',

        actions: [
            {type: 'Not sure what this means?'},
            {type: '<br>'},
            {delay: 1500},
            {type: 'I have compiled a collection of posts and videos'},
            {type: '<br>'},
            {type: 'within the last few days to show you exactly what it means to be exposed to'},
            {type: '<br>'},
            {type: 'the social media\'s ideal "beauty".'},
            {type: '<br>'},
            {type: '<br>'},
            {delay: 1500},
            {type: 'Would you like to peek through what I found? '},
            {select: {from:161, to: 191}}
        ]
    });
});


$(document).ready(function(){
    $('#typewriteText4').typewrite({
      speed: 12,
      selectedText: '#cf1f1f',

        actions: [
            {type: 'Perfection'},
            {type: '<br>'},
            {type: '<br>'},

            {delay: 1500},
            {type: 'is a terribly misplaced goal'},
            {type: '<br>'},
            {type: 'and most often a compensation for what really troubles us.'},
            {type: '<br>'},
            {type: '<br>'},
            {type: '<br>'},

            {type: '-Mel Schwartz-'},

            {select: {from:161, to: 191}}
        ]
    });
});
