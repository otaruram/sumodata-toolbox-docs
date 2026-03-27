# 📊 Sumo Lens (Data Analysis)

Tools for Data Analysts to understand complex code patterns and improve data processing logic.

## Explain Complex Regex

Decode regex patterns into plain English explanations.

### What it does

- Breaks down regex components
- Explains special characters
- Shows what patterns match
- Provides examples

### Example

**Input:**
```regex
^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$
```

**Output:**
```
Password validation pattern that requires:
- At least one uppercase letter (A-Z)
- At least one lowercase letter (a-z)
- At least one digit (0-9)
- At least one special character (@$!%*?&)
- Minimum 8 characters total

Examples that match:
✓ Password123!
✓ Secure@Pass1
✗ password (no uppercase, no digit, no special)
✗ Pass1 (too short, no special)
```

### When to use

- Reviewing data validation rules
- Understanding legacy regex patterns
- Debugging pattern matching issues
- Learning regex syntax

---

## Pandas Cleaning Logic Suggester

Get improved data cleaning code for pandas DataFrames.

### What it does

- Identifies inefficient operations
- Suggests better null handling
- Optimizes data types for memory
- Adds duplicate detection
- Improves outlier handling

### Example

**Input:**
```python
import pandas as pd
df = pd.read_csv('data.csv')
df = df.dropna()
print(df.head())
```

**Output:**
```python
import pandas as pd

# Load data
df = pd.read_csv('data.csv')

# Create a copy to avoid SettingWithCopyWarning
df = df.copy()

# Remove duplicates first
df = df.drop_duplicates()

# Handle missing values strategically
df = df.dropna(subset=['critical_column'])  # Drop only if critical columns are null
df['optional_column'] = df['optional_column'].fillna(0)  # Fill others with default

# Optimize data types for memory efficiency
df['age'] = df['age'].astype('int32')
df['category'] = df['category'].astype('category')

# Basic validation
print(f"Rows: {len(df)}, Columns: {len(df.columns)}")
print(df.info())
print(df.head())
```

### When to use

- Cleaning messy datasets
- Optimizing memory usage
- Improving data quality
- Preparing data for analysis

---

## SQL Logic Explainer

Understand complex SQL queries in plain English.

### What it does

- Breaks down query step-by-step
- Explains JOINs and subqueries
- Clarifies WHERE conditions
- Shows data flow

### Example

**Input:**
```sql
SELECT u.name, COUNT(o.id) as order_count, SUM(o.total) as revenue
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id, u.name
HAVING COUNT(o.id) > 5
ORDER BY revenue DESC
LIMIT 10
```

**Output:**
```
This query finds the top 10 most valuable customers:

1. Start with users table (u)
2. Join with orders table (o) - keeps all users even without orders
3. Filter: Only users created after Jan 1, 2024
4. Group by: Each unique user
5. Filter groups: Only users with more than 5 orders
6. Calculate: Count of orders and total revenue per user
7. Sort: Highest revenue first
8. Limit: Top 10 results

Result columns:
- name: Customer name
- order_count: Number of orders placed
- revenue: Total money spent
```

### When to use

- Understanding legacy queries
- Code review and documentation
- Learning SQL patterns
- Debugging complex logic

---

## Tips for Data Analysts

### Workflow Integration

1. **Data Exploration**: Use Pandas Cleaner for initial data prep
2. **Pattern Matching**: Explain Regex for validation rules
3. **Query Review**: SQL Explainer for understanding reports

### Best Practices

- Clean data early in your pipeline
- Document regex patterns for team members
- Review SQL logic before running on production
- Use type optimization for large datasets

### Common Use Cases

- **Data Quality**: Clean and validate incoming data
- **Report Building**: Understand existing SQL reports
- **Pattern Validation**: Decode complex validation rules
- **Performance**: Optimize pandas operations for speed
