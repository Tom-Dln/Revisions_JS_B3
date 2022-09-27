// Create a JSON object with each of your navigation items
var navigation = {
  'navItems' : [
    {
      'navTitle' : 'Liste des Parents',
      'navLink' : '/parents'
    },
    {
      'navTitle' : 'Liste des élèves',
      'navLink' : '/students'
    },
    {
      'navTitle' : 'Liste des Cours',
      'navLink' : '/lessons'
    }
  ]
};

// Pass the JSON object to your nav.handlebars template
var navTemplate = Handlebars.templates.nav(navigation);

// Prepend the navigation markup to the body element
$('body').prepend(navTemplate);