
document.addEventListener('DOMContentLoaded', function() {
    
    // Load recipes when the page loads
    loadRecipes();
    
    // Set up the hamburger menu
    setupHamburgerMenu();
    
    // Set up form submission (only on add-recipe page)
    const recipeForm = document.getElementById('recipe-form');
    if (recipeForm) {
        recipeForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Set up modal close buttons
    setupModalCloseButtons();
});

// ============================================
// HAMBURGER MENU FUNCTIONALITY
// ============================================
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

// ============================================
// RECIPE STORAGE FUNCTIONS (using localStorage)
// ============================================

// Get all recipes from localStorage
function getRecipes() {
    const recipes = localStorage.getItem('recipes');
    return recipes ? JSON.parse(recipes) : [];
}

// Save recipes to localStorage
function saveRecipes(recipes) {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

// Add a new recipe
function addRecipe(recipe) {
    const recipes = getRecipes();
    recipe.id = Date.now(); // Create a unique ID using timestamp
    recipes.push(recipe);
    saveRecipes(recipes);
}

// Delete a recipe by ID
function deleteRecipe(recipeId) {
    let recipes = getRecipes();
    recipes = recipes.filter(recipe => recipe.id !== recipeId);
    saveRecipes(recipes);
}

// ============================================
// DISPLAY RECIPES ON HOME PAGE
// ============================================
function loadRecipes() {
    const recipeGrid = document.getElementById('recipe-grid');
    const emptyState = document.getElementById('empty-state');
    
    // Only run on the home page
    if (!recipeGrid) return;
    
    const recipes = getRecipes();
    
    // Show empty state if no recipes
    if (recipes.length === 0) {
        emptyState.style.display = 'block';
        recipeGrid.style.display = 'none';
        return;
    }
    
    // Hide empty state and show recipes
    emptyState.style.display = 'none';
    recipeGrid.style.display = 'grid';
    
    // Clear the grid
    recipeGrid.innerHTML = '';
    
    // Create a card for each recipe
    recipes.forEach(recipe => {
        const card = createRecipeCard(recipe);
        recipeGrid.appendChild(card);
    });
}

// Create a recipe card element
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    
    // Create card HTML
    card.innerHTML = `
        <div class="recipe-image" style="background-image: url('${recipe.image || 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400'}')"></div>
        <div class="recipe-card-content">
            <span class="recipe-category">${recipe.category}</span>
            <h3 class="recipe-title">${recipe.name}</h3>
            <p class="recipe-description">${recipe.description || 'No description provided'}</p>
            <div class="recipe-card-buttons">
                <button class="btn btn-small btn-primary" onclick="viewRecipe(${recipe.id})">View Recipe</button>
                <button class="btn btn-small btn-danger" onclick="confirmDelete(${recipe.id})">Delete</button>
            </div>
        </div>
    `;
    
    return card;
}

// ============================================
// VIEW RECIPE DETAILS (MODAL)
// ============================================
function viewRecipe(recipeId) {
    const recipes = getRecipes();
    const recipe = recipes.find(r => r.id === recipeId);
    
    if (!recipe) return;
    
    // Fill modal with recipe details
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div class="recipe-detail">
            ${recipe.image ? `<img src="${recipe.image}" alt="${recipe.name}" class="recipe-detail-image">` : ''}
            <h2>${recipe.name}</h2>
            <p class="recipe-category-badge">${recipe.category}</p>
            ${recipe.description ? `<p class="recipe-description-full">${recipe.description}</p>` : ''}
            
            <h3>Ingredients</h3>
            <div class="recipe-ingredients">${formatText(recipe.ingredients)}</div>
            
            <h3>Instructions</h3>
            <div class="recipe-instructions">${formatText(recipe.instructions)}</div>
        </div>
    `;
    
    // Show the modal
    const modal = document.getElementById('recipe-modal');
    modal.style.display = 'flex';
}

// Format text (convert line breaks to paragraphs)
function formatText(text) {
    if (!text) return '';
    const lines = text.split('\n').filter(line => line.trim() !== '');
    return lines.map(line => `<p>${line}</p>`).join('');
}

// ============================================
// DELETE RECIPE CONFIRMATION
// ============================================
function confirmDelete(recipeId) {
    // Store the recipe ID for deletion
    window.recipeToDelete = recipeId;
    
    // Show delete confirmation modal
    const deleteModal = document.getElementById('delete-modal');
    deleteModal.style.display = 'flex';
}

// Handle actual deletion
function handleDelete() {
    if (window.recipeToDelete) {
        deleteRecipe(window.recipeToDelete);
        window.recipeToDelete = null;
        
        // Close modal
        closeModal('delete-modal');
        
        // Reload recipes
        loadRecipes();
        
        // Show success message
        showToast('Recipe deleted successfully!');
    }
}

// ============================================
// MODAL CONTROLS
// ============================================
function setupModalCloseButtons() {
    // Close buttons
    const closeButtons = document.querySelectorAll('.modal-close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });
    
    // Cancel delete button
    const cancelDelete = document.getElementById('cancel-delete');
    if (cancelDelete) {
        cancelDelete.addEventListener('click', function() {
            closeModal('delete-modal');
        });
    }
    
    // Confirm delete button
    const confirmDeleteBtn = document.getElementById('confirm-delete');
    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', handleDelete);
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// ============================================
// FORM SUBMISSION (ADD RECIPE PAGE)
// ============================================
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent page reload
    
    // Clear previous error messages
    clearErrors();
    
    // Get form values
    const name = document.getElementById('recipe-name').value.trim();
    const category = document.getElementById('recipe-category').value;
    const description = document.getElementById('recipe-description').value.trim();
    const ingredients = document.getElementById('recipe-ingredients').value.trim();
    const instructions = document.getElementById('recipe-instructions').value.trim();
    const image = document.getElementById('recipe-image').value.trim();
    
    // Validate form
    let isValid = true;
    
    if (!name) {
        showError('error-name', 'Please enter a recipe name');
        isValid = false;
    }
    
    if (!category) {
        showError('error-category', 'Please select a category');
        isValid = false;
    }
    
    if (!ingredients) {
        showError('error-ingredients', 'Please enter ingredients');
        isValid = false;
    }
    
    if (!instructions) {
        showError('error-instructions', 'Please enter instructions');
        isValid = false;
    }
    
    // If form is not valid, stop here
    if (!isValid) {
        return;
    }
    
    // Create recipe object
    const recipe = {
        name: name,
        category: category,
        description: description,
        ingredients: ingredients,
        instructions: instructions,
        image: image
    };
    
    // Save recipe
    addRecipe(recipe);
    
    // Show success message
    showToast('Recipe added successfully!');
    
    // Redirect to home page after 1 second
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 1000);
}

// ============================================
// FORM VALIDATION HELPERS
// ============================================
function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.textContent = '';
        error.style.display = 'none';
    });
}

// ============================================
// TOAST NOTIFICATION
// ============================================
function showToast(message) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = message;
        toast.classList.add('show');
        
        // Hide after 3 seconds
        setTimeout(function() {
            toast.classList.remove('show');
        }, 3000);
    }
}
