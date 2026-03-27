# 🤖 Sumo Core (Data Science/ML)

Tools for Data Scientists and ML Engineers to improve code quality and accelerate development.

## Auto-generate Google-style Docstrings

Add professional documentation to Python functions automatically.

### What it does

- Generates Google-style docstrings
- Documents parameters and return values
- Adds type information
- Includes usage examples when relevant

### Example

**Input:**
```python
def train_model(X_train, y_train, epochs=100, learning_rate=0.001):
    model = create_model()
    model.fit(X_train, y_train, epochs=epochs, lr=learning_rate)
    return model
```

**Output:**
```python
def train_model(X_train, y_train, epochs=100, learning_rate=0.001):
    """Train a machine learning model on the provided dataset.
    
    Args:
        X_train: Training features as numpy array or pandas DataFrame
        y_train: Training labels as numpy array or pandas Series
        epochs: Number of training iterations (default: 100)
        learning_rate: Learning rate for optimization (default: 0.001)
        
    Returns:
        Trained model object ready for prediction
        
    Example:
        >>> X_train, y_train = load_data()
        >>> model = train_model(X_train, y_train, epochs=50)
        >>> predictions = model.predict(X_test)
    """
    model = create_model()
    model.fit(X_train, y_train, epochs=epochs, lr=learning_rate)
    return model
```

### When to use

- Documenting ML pipelines
- Creating library functions
- Code review preparation
- Team collaboration

---

## Type Hinting for Python

Add type annotations for better code safety and IDE support.

### What it does

- Adds type hints to function signatures
- Infers types from usage
- Supports complex types (List, Dict, Optional)
- Improves IDE autocomplete

### Example

**Input:**
```python
def preprocess_data(data, columns, normalize=True):
    if normalize:
        data = (data - data.mean()) / data.std()
    return data[columns]
```

**Output:**
```python
from typing import List, Union
import pandas as pd
import numpy as np

def preprocess_data(
    data: Union[pd.DataFrame, np.ndarray],
    columns: List[str],
    normalize: bool = True
) -> Union[pd.DataFrame, np.ndarray]:
    if normalize:
        data = (data - data.mean()) / data.std()
    return data[columns]
```

### When to use

- Improving code maintainability
- Catching type errors early
- Better IDE support
- Team projects with strict typing

---

## PyTorch/Scikit-learn Training Loop

Generate ML training boilerplate code with best practices.

### What it does

- Creates complete training loop
- Adds validation logic
- Implements early stopping
- Includes logging and metrics
- Handles device management (CPU/GPU)

### Example - PyTorch

**Input:** "Create a PyTorch training loop for image classification"

**Output:**
```python
import torch
import torch.nn as nn
from torch.utils.data import DataLoader
from tqdm import tqdm

def train_model(
    model: nn.Module,
    train_loader: DataLoader,
    val_loader: DataLoader,
    epochs: int = 100,
    learning_rate: float = 0.001,
    device: str = 'cuda' if torch.cuda.is_available() else 'cpu'
):
    """Train a PyTorch model with validation and early stopping."""
    
    model = model.to(device)
    criterion = nn.CrossEntropyLoss()
    optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)
    
    best_val_loss = float('inf')
    patience = 10
    patience_counter = 0
    
    for epoch in range(epochs):
        # Training phase
        model.train()
        train_loss = 0.0
        train_correct = 0
        train_total = 0
        
        for batch_idx, (data, target) in enumerate(tqdm(train_loader)):
            data, target = data.to(device), target.to(device)
            
            optimizer.zero_grad()
            output = model(data)
            loss = criterion(output, target)
            loss.backward()
            optimizer.step()
            
            train_loss += loss.item()
            _, predicted = output.max(1)
            train_total += target.size(0)
            train_correct += predicted.eq(target).sum().item()
        
        train_acc = 100. * train_correct / train_total
        avg_train_loss = train_loss / len(train_loader)
        
        # Validation phase
        model.eval()
        val_loss = 0.0
        val_correct = 0
        val_total = 0
        
        with torch.no_grad():
            for data, target in val_loader:
                data, target = data.to(device), target.to(device)
                output = model(data)
                loss = criterion(output, target)
                
                val_loss += loss.item()
                _, predicted = output.max(1)
                val_total += target.size(0)
                val_correct += predicted.eq(target).sum().item()
        
        val_acc = 100. * val_correct / val_total
        avg_val_loss = val_loss / len(val_loader)
        
        print(f'Epoch {epoch+1}/{epochs}:')
        print(f'  Train Loss: {avg_train_loss:.4f}, Train Acc: {train_acc:.2f}%')
        print(f'  Val Loss: {avg_val_loss:.4f}, Val Acc: {val_acc:.2f}%')
        
        # Early stopping
        if avg_val_loss < best_val_loss:
            best_val_loss = avg_val_loss
            patience_counter = 0
            torch.save(model.state_dict(), 'best_model.pth')
        else:
            patience_counter += 1
            if patience_counter >= patience:
                print(f'Early stopping at epoch {epoch+1}')
                break
    
    # Load best model
    model.load_state_dict(torch.load('best_model.pth'))
    return model
```

### Example - Scikit-learn

**Input:** "Create a scikit-learn training pipeline with cross-validation"

**Output:**
```python
from sklearn.model_selection import cross_val_score, GridSearchCV
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
import numpy as np

def train_sklearn_model(X_train, y_train, model, param_grid=None):
    """Train a scikit-learn model with preprocessing and hyperparameter tuning."""
    
    # Create pipeline with preprocessing
    pipeline = Pipeline([
        ('scaler', StandardScaler()),
        ('model', model)
    ])
    
    if param_grid:
        # Hyperparameter tuning with cross-validation
        grid_search = GridSearchCV(
            pipeline,
            param_grid,
            cv=5,
            scoring='accuracy',
            n_jobs=-1,
            verbose=1
        )
        grid_search.fit(X_train, y_train)
        
        print(f'Best parameters: {grid_search.best_params_}')
        print(f'Best CV score: {grid_search.best_score_:.4f}')
        
        return grid_search.best_estimator_
    else:
        # Simple cross-validation
        scores = cross_val_score(pipeline, X_train, y_train, cv=5)
        print(f'CV scores: {scores}')
        print(f'Mean CV score: {scores.mean():.4f} (+/- {scores.std() * 2:.4f})')
        
        # Train on full dataset
        pipeline.fit(X_train, y_train)
        return pipeline
```

### When to use

- Starting new ML projects
- Implementing training pipelines
- Learning ML frameworks
- Standardizing team workflows

---

## Tips for ML Engineers

### Workflow Integration

1. **Documentation**: Add docstrings before code review
2. **Type Safety**: Add type hints for complex pipelines
3. **Rapid Prototyping**: Generate training loops quickly

### Best Practices

- Always add docstrings to public functions
- Use type hints for function signatures
- Include validation in training loops
- Log metrics for experiment tracking

### Common Use Cases

- **Model Development**: Quick training loop setup
- **Code Quality**: Consistent documentation style
- **Team Collaboration**: Clear type annotations
- **Experimentation**: Fast iteration on architectures
