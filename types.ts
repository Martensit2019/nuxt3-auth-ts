export interface LoginForm {
  username: string
  password: string
}

export interface RegisterForm {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export type TypeAuth = 'login' | 'register'

export interface User {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
}

export interface Login {
  username: string
  password: string
}

export interface Customer {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: Date
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: Hair
  domain: string
  ip: string
  address: Address
  macAddress: string
  university: string
  bank: Bank
  company: Company
  ein: string
  ssn: string
  userAgent: string
}

export interface Address {
  address: string
  city: string
  coordinates: Coordinates
  postalCode: string
  state: string
}

export interface Coordinates {
  lat: number
  lng: number
}

export interface Bank {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

export interface Company {
  address: Address
  department: string
  name: string
  title: string
}

export interface Hair {
  color: string
  type: string
}
