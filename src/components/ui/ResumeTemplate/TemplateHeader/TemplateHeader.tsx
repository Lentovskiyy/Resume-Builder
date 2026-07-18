import React from "react";
import { IResumeContent } from "@/shared/interfaces/resume/IResume";
import { TEMPLATE_STYLES, TemplateId } from "@/config/templates";

interface IResumeHeaderProps {
  formData: IResumeContent;
  templateId: TemplateId;
}

const ResumeHeader = ({ formData, templateId }: IResumeHeaderProps) => {
  const style = TEMPLATE_STYLES[templateId] || TEMPLATE_STYLES.classic;

  return (
    <div
      className={style.header.bodyClass}
    >
      <header>
        <span className={style.header.nameClass}>
          {formData?.contact?.fullName || formData.contact?.fullName || "Untitled Name"}
        </span>
      </header>

      <div>
        <ul className={style.header.listClass}>
          {formData?.contact?.phoneNumber && (
            <li className={style.header.bulletClass}>
              {formData.contact.phoneNumber}
            </li>
          )}

          {formData?.contact?.country && (
            <li className={style.header.bulletClass}>
              {formData.contact.country}
            </li>
          )}

          {formData?.contact?.email && (
            <li className={style.header.bulletClass}>
              {formData.contact.email}
            </li>
          )}

          {formData?.contact?.personalWebsite && (
            <li className={style.header.bulletClass}>
              {formData.contact.personalWebsite}
            </li>
          )}

          {formData?.contact?.linkedin && (
            <li className={style.header.bulletClass}>
              {formData.contact.linkedin}
            </li>
          )}

          {formData?.contact?.state && (
            <li className={style.header.bulletClass}>
              {formData.contact.state}
            </li>
          )}

          {formData?.contact?.city && (
            <li className={style.header.bulletClass}>
              {formData.contact.city}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ResumeHeader;