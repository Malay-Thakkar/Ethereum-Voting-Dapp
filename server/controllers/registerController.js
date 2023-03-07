import Joi from 'joi';
import { User } from '../models';

const registerController = {
    async register(req, res, next) {

        // Validation
        const registerSchema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            account: Joi.string().required(),
            email: Joi.string().email().required(),
        });
        const { error } = registerSchema.validate(req.body);
        if (error) {
            return next(error);
        }
        // check if user is in the database already
        try {
            const exist = await User.exists({ account: req.body.account });
            if (exist) {
                return next(CustomErrorHandler.alreadyExist('This Account is already exists.'));
            }
        } catch (err) {
            return next(err);
        }
        const { name, email, password } = req.body;

        // prepare the model

        const user = new User({
            name,
            account,
            email,
        });


        try {
            const result = await user.save();
            console.log(result);
        } catch (err) {
            return next(err);
        }
    }
}


export default registerController;