import { User } from '@/types'

// Simulated authentication functions (replace with actual authentication in a real application)

let currentUser: User | null =   {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com'
}

export async function login(email: string, password: string): Promise<User> {
  // Simulated login
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'john@example.com' && password === 'password') {
        currentUser = {
          id: '1',
          name: 'John Doe',
          email: 'john@example.com'
        }
        resolve(currentUser)
      } else {
        reject(new Error('Invalid credentials'))
      }
    }, 1000)
  })
}

export async function logout(): Promise<void> {
  // Simulated logout
  return new Promise((resolve) => {
    setTimeout(() => {
      currentUser = null
      resolve()
    }, 500)
  })
}

export async function getUser(): Promise<User | null> {
  // Simulated get user
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(currentUser)
    }, 500)
  })
}

export async function updateUser(updatedUser: Partial<User>): Promise<User> {
  // Simulated update user
  return new Promise((resolve) => {
    setTimeout(() => {
      if (currentUser) {
        currentUser = { ...currentUser, ...updatedUser }
        resolve(currentUser)
      } else {
        throw new Error('No user logged in')
      }
    }, 500)
  })
}