import { ApiError } from './error.middleware.js';

/**
 * Validate request against Zod schema
 * @param {import('zod').ZodSchema} schema - Zod schema to validate against
 */
export const validate = (schema) => async (req, res, next) => {
  try {
    const parsed = await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    // Replace request data with parsed (and transformed) data
    req.body = parsed.body ?? req.body;
    req.query = parsed.query ?? req.query;
    req.params = parsed.params ?? req.params;

    next();
  } catch (error) {
    if (error.name === 'ZodError') {
      const errors = error.errors.map((e) => ({
        field: e.path.join('.'),
        message: e.message,
      }));

      return next(new ApiError(400, 'Validation failed', errors));
    }
    next(error);
  }
};
