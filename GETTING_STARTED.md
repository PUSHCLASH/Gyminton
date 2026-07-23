# Getting Started with Gyminton

Welcome to the Gyminton Premium Gym Management SaaS Platform! This guide will help you get started with development.

## Prerequisites

- **Node.js**: v18 or higher
- **npm** or **yarn**: Package manager
- **PostgreSQL**: v13+ (or use Supabase)
- **Git**: Version control

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/PUSHCLASH/Gyminton.git
cd Gyminton
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

#### Backend

```bash
cd apps/backend
cp .env.example .env.local
```

Edit `apps/backend/.env.local`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/gyminton_dev"
NODE_ENV=development
PORT=3001
JWT_SECRET=your_secret_key_here
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
WEATHER_API_KEY=your_openweathermap_api_key
```

#### Frontend

```bash
cd apps/frontend
cp .env.example .env.local
```

Edit `apps/frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Database Setup

#### Option A: Using Docker (Recommended)

```bash
# Start PostgreSQL with Docker
docker run --name gyminton-db \
  -e POSTGRES_USER=gyminton \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=gyminton_dev \
  -p 5432:5432 \
  -d postgres:15

# Update DATABASE_URL in .env.local
DATABASE_URL="postgresql://gyminton:password@localhost:5432/gyminton_dev"
```

#### Option B: Using Supabase

1. Create project at https://supabase.com
2. Copy PostgreSQL connection string
3. Set `DATABASE_URL` in `.env.local`

### 5. Run Migrations

```bash
cd apps/backend
npm run migrate
npm run seed
```

This creates the database schema and populates with sample data.

## Development

### Option 1: Using Docker Compose (Easiest)

```bash
docker-compose up -d
```

This starts:
- PostgreSQL database
- Redis cache
- Backend server (http://localhost:3001)
- Frontend app (http://localhost:3000)

### Option 2: Manual Setup

#### Terminal 1: Backend

```bash
cd apps/backend
npm run dev
```

Server runs on http://localhost:3001

#### Terminal 2: Frontend

```bash
cd apps/frontend
npm run dev
```

App runs on http://localhost:3000

## Default Credentials

After seeding, you can login with:

- **Admin**: admin@gyminton.com / Admin@123
- **Trainer**: trainer@gyminton.com / Trainer@123
- **Member**: member@gyminton.com / Member@123

## Project Structure

```
Gyminton/
├── apps/
│   ├── frontend/
│   │   ├── app/              # Next.js app directory
│   │   ├── components/       # React components
│   │   ├── lib/              # Utilities & hooks
│   │   └── public/           # Static assets
│   └── backend/
│       ├── src/
│       │   ├── controllers/  # Request handlers
│       │   ├── routes/       # API routes
│       │   ├── services/     # Business logic
│       │   ├── utils/        # Utilities
│       │   └── server.ts     # Express app
│       ├── prisma/           # Database schema
│       └── dist/             # Compiled JavaScript
├── .github/
│   └── workflows/            # CI/CD workflows
├── docker-compose.yml        # Docker configuration
├── DEPLOYMENT.md             # Deployment guide
└── README.md                 # Main readme
```

## Common Commands

### Frontend

```bash
npm run dev          # Development server
npm run build        # Build for production
npm run start        # Start production server
npm run type-check   # TypeScript check
npm run lint         # Lint code
```

### Backend

```bash
npm run dev              # Development server
npm run build            # Build TypeScript
npm start                # Start production server
npm run migrate          # Run database migrations
npm run migrate:prod     # Run migrations in production
npm run seed             # Seed database with sample data
npm run db:reset         # Reset database (dev only)
npm run type-check       # TypeScript check
npm run lint             # Lint code
```

## API Testing

### Using cURL

```bash
# Register
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Password@123",
    "firstName": "John",
    "lastName": "Doe"
  }'

# Login
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Password@123"
  }'

# Get Weather
curl "http://localhost:3001/api/weather/current?city=London"
```

### Using Postman

1. Import API collection (coming soon)
2. Set `{{base_url}}` to `http://localhost:3001`
3. Set `{{token}}` from login response
4. Test endpoints

## Database

### Prisma Commands

```bash
# Create migration
npx prisma migrate dev --name add_new_table

# Apply migrations
npm run migrate

# Reset database (dev only)
npm run db:reset

# Seed database
npm run seed

# Open Prisma Studio
npx prisma studio
```

### View Schema

See `apps/backend/prisma/schema.prisma`

## Troubleshooting

### Port Already in Use

```bash
# Find process using port 3001
lsof -i :3001

# Kill process
kill -9 <PID>
```

### Database Connection Error

```bash
# Check PostgreSQL is running
psql -U gyminton -d gyminton_dev -c "SELECT 1"

# Reset database
npm run db:reset
```

### Module Not Found

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
npm run type-check
```

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes and commit
git add .
git commit -m "Add my feature"

# Push to GitHub
git push origin feature/my-feature

# Create Pull Request on GitHub
```

## Next Steps

1. ✅ Complete local setup
2. ✅ Test with default credentials
3. ✅ Explore API at `/api/docs`
4. ✅ Review codebase structure
5. ✅ Start developing features

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/)
- [Prisma Docs](https://www.prisma.io/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [API Documentation](http://localhost:3001/api/docs)

## Getting Help

- **Documentation**: Check README files in each app
- **API Docs**: Visit http://localhost:3001/api/docs
- **GitHub Issues**: Create an issue with details
- **Discord**: Join our community (coming soon)

## Support

For help or questions:
1. Check the documentation
2. Review GitHub issues
3. Create a new issue
4. Contact support@gyminton.com

---

Happy coding! 🚀
