# 📂 Sumo Pipes (Data Engineering)

Tools designed specifically for Data Engineers to optimize workflows and generate boilerplate code.

## SQL Optimizer

Automatically optimize slow SQL queries with performance improvements and indexing suggestions.

### What it does

- Removes unnecessary `SELECT *`
- Optimizes `LIKE` patterns
- Suggests appropriate indexes
- Identifies duplicate operations
- Improves JOIN performance

### Example

**Input:**
```sql
SELECT * FROM users 
WHERE name LIKE '%john%' 
AND status = 'active'
ORDER BY created_at DESC
```

**Output:**
```sql
SELECT id, name, email, status, created_at 
FROM users 
WHERE name LIKE 'john%'  -- Changed for index usage
  AND status = 'active'
ORDER BY created_at DESC

-- Suggested indexes:
-- CREATE INDEX idx_name_status ON users(name, status);
-- CREATE INDEX idx_created_at ON users(created_at DESC);
```

### When to use

- Query is running slow
- Need to optimize database performance
- Want index recommendations
- Reviewing legacy SQL code

---

## JSON to DDL Schema

Convert JSON structure to database table schema (DDL) instantly.

### What it does

- Analyzes JSON structure
- Infers appropriate data types
- Generates CREATE TABLE statements
- Handles nested objects
- Suggests constraints

### Example

**Input:**
```json
{
  "user_id": 12345,
  "username": "john_doe",
  "email": "john@example.com",
  "age": 30,
  "is_active": true,
  "created_at": "2024-01-15T10:30:00Z"
}
```

**Output:**
```sql
CREATE TABLE users (
  user_id BIGINT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  age INT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL
);

-- Suggested indexes:
CREATE INDEX idx_username ON users(username);
CREATE INDEX idx_email ON users(email);
```

### When to use

- Designing new database tables
- Migrating from NoSQL to SQL
- API response to database schema
- Quick prototyping

---

## Cron Expression Generator

Generate cron expressions from plain English descriptions.

### What it does

- Converts natural language to cron syntax
- Validates cron expressions
- Provides human-readable explanations
- Supports complex schedules

### Examples

**Input:** "Run every day at 3 AM"
```
0 3 * * *  # Every day at 3:00 AM
```

**Input:** "Run every Monday at 9:30 AM"
```
30 9 * * 1  # Every Monday at 9:30 AM
```

**Input:** "Run every 15 minutes during business hours"
```
*/15 9-17 * * 1-5  # Every 15 minutes, 9 AM to 5 PM, Monday to Friday
```

**Input:** "Run on the first day of every month"
```
0 0 1 * *  # At midnight on the first day of every month
```

### When to use

- Setting up scheduled jobs
- Configuring ETL pipelines
- Creating backup schedules
- Automating data workflows

---

## Tips for Data Engineers

### Workflow Integration

1. **SQL Review**: Use SQL Optimizer before committing queries
2. **Schema Design**: Generate DDL from API responses quickly
3. **Automation**: Create cron schedules without syntax lookup

### Best Practices

- Always review generated indexes before applying
- Test optimized queries on staging first
- Validate cron expressions with online tools
- Document why specific optimizations were chosen

### Common Use Cases

- **ETL Pipelines**: Optimize data transformation queries
- **API Development**: Generate schemas from JSON payloads
- **Data Warehousing**: Schedule regular data loads
- **Performance Tuning**: Identify slow query patterns
