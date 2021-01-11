import { Response } from 'express';
import mongoose from 'mongoose';

export abstract class BaseController {
  protected sendCreatedUpdateErrorResponse(
    res: Response,
    error: mongoose.Error.ValidationError | Error
  ): Response {
    console.log(error);
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(422).send({ code: 422, error: error.message });
    } else {
      return res
        .status(500)
        .send({ code: 500, error: 'Something went wrong!' });
    }
  }
}
