import { ValidationError } from "../utils/error.js";
import staffSchema from "../utils/validation.js";

export default {
    createStaff: (req, res, next) => {
        let { error } = staffSchema.staffSchema.validate(req.body);
        if (error) {
            return next(new ValidationError(400, error.message));
        }

        return next();
    }
}