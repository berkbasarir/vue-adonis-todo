'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ResourceNotExistException extends LogicalException {
  /**
   * Handle this exception by itself
   */
   handle (error, { response }) {
    return response.status(404).json({
      Error: 'the resource did not exist',
    });
  }
}

module.exports = ResourceNotExistException
