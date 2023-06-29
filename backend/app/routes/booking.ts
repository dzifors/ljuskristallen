import express from 'express'
import { createBooking, getUnfinishedBookings } from '../controllers/booking'

const bookingRouter = express.Router()

// Get all bookings that are not finished
bookingRouter.get('/', getUnfinishedBookings)

// Create a booking
bookingRouter.post('/', createBooking)

export default bookingRouter
