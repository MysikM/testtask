import React, {useState} from 'react';
import './file-load.scss';
import {VARIABLE} from "../../variables/variables";

const FIleLoad = ({file, setFile, className, formFilled, setFormFilled}, ...props) => {
    const [helpLabel, setHelpLabel] = useState(VARIABLE.VALIDATION_MESSAGE.EMPTY)


    const checkFileSize = (number) => {
         if((number/1048576).toFixed(1) >= 5) {
             setHelpLabel(VARIABLE.VALIDATION_MESSAGE.FILE.SIZE);
             setFormFilled({...formFilled, file: false});
         }
    }

    const checkFileType = (type) => {
        if (type !== 'image/jpeg' && type !== 'image/jpg') {
            setHelpLabel(VARIABLE.VALIDATION_MESSAGE.FILE.TYPE);
            setFormFilled({...formFilled, file: false});
        }
    }

    const checkFileResolution = (fileUpload) => {
        let reader = new FileReader();
        reader.readAsDataURL(fileUpload);
        reader.onload = function (e) {
            //Initiate the JavaScript Image object.
            let image = new Image();

            image.src = e.target.result;

            //Validate the File Height and Width.
            image.onload = function () {
                let height = this.height;
                let width = this.width;

                if (height < 70 || width < 70) {
                    setHelpLabel(VARIABLE.VALIDATION_MESSAGE.FILE.RESOLUTION);
                    setFormFilled({...formFilled, file: false});
                }
            };

        }
    }

    const fileCheck = (e) => {
        setHelpLabel(VARIABLE.VALIDATION_MESSAGE.EMPTY);
        const fileUpload = e.target.files[0];
        setFormFilled({...formFilled, file: true});
        checkFileType(fileUpload.type);
        checkFileResolution(fileUpload);
        checkFileSize(fileUpload.size);
        setFile(fileUpload);
    }
    return (
        <div className={`file-input ${className}`}>
            <label htmlFor="file-upload" className={`file-input__custom ${helpLabel.length> 1 ? 'file-input__custom--error' : ''}`}>
                 Upload
            </label>
            <span className= {`file-input__preview ${file?.name ? 'file-input__preview--added': ''} ${helpLabel.length> 1 ? 'file-input__preview--error' : ''}`}>
                {`${file?.name || "Upload your photo"}`}
            </span>
            <span className='file-input__error'>{helpLabel}</span>
            <input
                   id="file-upload"
                   type="file"
                   onChange={fileCheck}
            />
        </div>
    );
};

export default FIleLoad;