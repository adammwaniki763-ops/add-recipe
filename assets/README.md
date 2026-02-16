# Recipe Keeper 🍳

A simple web application for managing and organizing your favorite recipes. Built as a final project for an introductory JavaScript and CSS course.

## Project Overview

Recipe Keeper is a web-based application that allows users to save, organize, and view their favorite recipes. Users can add recipes with ingredients, instructions, and images, categorize them, and manage their collection all in one place.

**Live Demo:** Open `index.html` in your web browser to start using the app!

## Features

### Core Functionality
- **Add Recipes**: Create new recipes with name, category, description, ingredients, instructions, and image URL
- **View Recipes**: Browse all your saved recipes in a beautiful grid layout
- **Recipe Details**: Click on any recipe to view full details in a modal popup
- **Delete Recipes**: Remove recipes you no longer need with a confirmation dialog
- **Categories**: Organize recipes by category (Appetizer, Main Course, Dessert, Side Dish, Beverage, Breakfast, Soup)
- **Local Storage**: All recipes are saved in your browser's local storage - no server required!

### User Interface
- Clean, modern design with a purple gradient hero section
- Responsive layout that works on mobile, tablet, and desktop
- Interactive recipe cards with hover effects
- Modal popups for viewing recipe details
- Toast notifications for user feedback
- Empty state message when no recipes exist

### Form Validation
- Required field validation
- Error messages displayed under invalid fields
- Prevents form submission with missing information

## Technologies Used

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with flexbox and grid layouts
- **JavaScript (ES6)**: Interactive functionality and DOM manipulation
- **LocalStorage API**: Client-side data persistence

## File Structure

```
recipe-keeper/
│
├── index.html          # Home page with recipe grid
├── add-recipe.html     # Form page to add new recipes
├── about.html          # About page with project information
├── style.css           # All styling for the application
├── script.js           # All JavaScript functionality
└── README.md           # This file
```

## How to Use

### Getting Started
1. Download all project files to a folder on your computer
2. Open `index.html` in a modern web browser (Chrome, Firefox, Safari, Edge)
3. That's it! No installation or server setup required

### Adding a Recipe
1. Click "Add Recipe" in the navigation menu
2. Fill out the form:
   - **Recipe Name** (required): Enter the name of your recipe
   - **Category** (required): Select a category from the dropdown
   - **Description** (optional): Add a brief description
   - **Ingredients** (required): List ingredients (one per line)
   - **Instructions** (required): Add step-by-step cooking instructions
   - **Image URL** (optional): Paste a URL to an image (try Unsplash.com for free images)
3. Click "Add Recipe" button
4. You'll be redirected to the home page where you can see your new recipe

### Viewing Recipe Details
1. On the home page, click "View Recipe" on any recipe card
2. A popup will show the full recipe with ingredients and instructions
3. Click the X button or click outside the popup to close it

### Deleting a Recipe
1. Click "Delete" button on any recipe card
2. Confirm the deletion in the popup dialog
3. The recipe will be permanently removed

## JavaScript Concepts Demonstrated

This project demonstrates the following JavaScript concepts covered in an introductory course:

- **DOM Manipulation**: Selecting and modifying HTML elements
- **Event Handling**: Click events, form submissions, keyboard events
- **Functions**: Organizing code into reusable functions
- **Arrays**: Storing and manipulating recipe collections
- **Objects**: Representing recipes as JavaScript objects
- **LocalStorage**: Saving and retrieving data from the browser
- **JSON**: Converting between objects and strings
- **Conditionals**: if/else statements for validation and logic
- **Loops**: forEach for iterating through recipes
- **Template Literals**: Creating HTML strings dynamically
- **Arrow Functions**: Modern function syntax
- **Array Methods**: filter(), find(), map(), forEach()

## CSS Concepts Demonstrated

- **Flexbox**: Flexible layouts for navigation and buttons
- **CSS Grid**: Recipe card grid layout
- **Media Queries**: Responsive design for mobile devices
- **Transitions**: Smooth animations on hover and interactions
- **Box Model**: Padding, margins, borders
- **Positioning**: Fixed, absolute, and relative positioning
- **Pseudo-classes**: :hover, :active, :focus states
- **Box Shadow**: Depth and elevation effects
- **Border Radius**: Rounded corners
- **Linear Gradients**: Background color gradients

## Browser Compatibility

This application works in all modern browsers:
- Google Chrome (recommended)
- Mozilla Firefox
- Safari
- Microsoft Edge

**Note**: Internet Explorer is not supported.

## Known Issues & Limitations

- Recipes are stored in browser's localStorage (clearing browser data will delete recipes)
- Image URLs must be valid and publicly accessible
- No server-side storage or database
- No user authentication (recipes are local to each browser)
- Maximum localStorage limit is about 5-10MB depending on browser

## Future Enhancements (Ideas for Improvement)

If you want to expand this project, here are some ideas:
- Add search/filter functionality
- Implement recipe editing
- Add recipe rating system
- Allow image file uploads instead of URLs only
- Add print recipe feature
- Export/import recipes as JSON
- Add cooking timer
- Include nutritional information
- Add favorite/bookmark feature
- Create meal planning feature

## Learning Resources

If you want to learn more about the technologies used:

- **HTML**: [MDN HTML Guide](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS**: [MDN CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **JavaScript**: [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **LocalStorage**: [MDN Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

## Credits

- **Developer**: [Your Name]
- **Course**: Introduction to JavaScript & CSS
- **Year**: 2024
- **Default Recipe Images**: Unsplash.com (free stock photos)

## License

This project is free to use for educational purposes. Feel free to modify and extend it for your learning!

---

**Copyright © 2024 Recipe Keeper. All rights reserved.**

## Contact