import { ErrorMessage, useField } from "formik";

const CustomInput = ({
    label, type, placeholder, options = [], name, isMulti = false, rightElement, autoComplete,
    timeFormat24 = true, required = false, ...props
}) => {
    const [field, meta] = useField({ name, type, ...props });

    const renderField = () => {
        switch (type) {
            default:
                return (
                    <div className="relative flex items-center">
                        <input id={name} type={type} placeholder={placeholder}{...field} className={`w-full rounded-lg 
                            border-[1.5px] py-2.5 bg-transparent text-black outline-none transition focus:border-blue-700 
                            ps-3 active:border-blue-700 disabled:cursor-default disabled:bg-gray-500 dark:bg-form-input
                            dark:focus:border-blue-700 dark:text-white ${meta.touched && meta.error ? `border-[#FF0000] 
                                dark:border-[#FF0000]` : 'border-[#A3A3A3] dark:border-form-strokedark'}`}
                            autoComplete={autoComplete}
                        />

                        {rightElement && (
                            <div className="absolute right-2 flex items-center">
                                {rightElement}
                            </div>
                        )}
                    </div>
                )
        }
    };

    return (
        <div>
            <label className="mb-1 block text-[#111827] inter_medium">
                {label} {required && <span className="text-[#dc3545]">*</span>}
            </label>
            {renderField()}
            <ErrorMessage component="div" name={field.name} className="text-base text-red-600 inter mt-1" />
        </div>
    );
};

export default CustomInput