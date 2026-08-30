


export const validateRequest = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            const flatErrors = Object.values(result.error.flatten().fieldErrors)
                .flat()
                .filter(Boolean);

            console.log(flatErrors);

            return res.status(400).json({
                message: flatErrors.join(", ")
            });
        }

        next();
    };
};

