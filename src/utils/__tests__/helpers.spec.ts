import { describe, it, expect, vi } from 'vitest'
import { formatName, validateEmail, capitalizeFirst, debounce } from '../helpers'

describe('helpers', () => {
  describe('formatName', () => {
    it('returns only first name when lastName is not provided', () => {
      expect(formatName('John')).toBe('John')
    })

    it('returns full name when both names are provided', () => {
      expect(formatName('John', 'Doe')).toBe('John Doe')
    })

    it('handles empty lastName', () => {
      expect(formatName('John', '')).toBe('John')
    })
  })

  describe('validateEmail', () => {
    it('returns true for valid email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true)
      expect(validateEmail('user.name@domain.co.uk')).toBe(true)
      expect(validateEmail('user+tag@example.org')).toBe(true)
    })

    it('returns false for invalid email addresses', () => {
      expect(validateEmail('invalid-email')).toBe(false)
      expect(validateEmail('user@')).toBe(false)
      expect(validateEmail('@domain.com')).toBe(false)
      expect(validateEmail('user@domain')).toBe(false)
      expect(validateEmail('')).toBe(false)
    })
  })

  describe('capitalizeFirst', () => {
    it('capitalizes the first letter and lowercases the rest', () => {
      expect(capitalizeFirst('hello')).toBe('Hello')
      expect(capitalizeFirst('WORLD')).toBe('World')
      expect(capitalizeFirst('tEST')).toBe('Test')
    })

    it('handles empty string', () => {
      expect(capitalizeFirst('')).toBe('')
    })

    it('handles single character', () => {
      expect(capitalizeFirst('a')).toBe('A')
      expect(capitalizeFirst('Z')).toBe('Z')
    })
  })

  describe('debounce', () => {
    it('delays function execution', async () => {
      vi.useFakeTimers()

      const mockFn = vi.fn()
      const debouncedFn = debounce(mockFn, 100)

      debouncedFn('test')
      expect(mockFn).not.toHaveBeenCalled()

      vi.advanceTimersByTime(50)
      expect(mockFn).not.toHaveBeenCalled()

      vi.advanceTimersByTime(50)
      expect(mockFn).toHaveBeenCalledWith('test')

      vi.useRealTimers()
    })

    it('cancels previous calls when called multiple times', async () => {
      vi.useFakeTimers()

      const mockFn = vi.fn()
      const debouncedFn = debounce(mockFn, 100)

      debouncedFn('first')
      vi.advanceTimersByTime(50)

      debouncedFn('second')
      vi.advanceTimersByTime(100)

      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenCalledWith('second')

      vi.useRealTimers()
    })
  })
})
