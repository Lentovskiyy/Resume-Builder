import {TEMPLATE_STYLES, TemplateId} from "@/config/templates";
import {IResumeContent} from "@/shared/interfaces/resume/IResume";

interface IProps {
  formData: IResumeContent;
  templateId: TemplateId;
}

const TemplateSection = ({ formData, templateId }: IProps) => {
  const currentStyle = TEMPLATE_STYLES[templateId] || TEMPLATE_STYLES.classic;
  const { section } = currentStyle;

  return (
    <div className={section.containerClass}>
      {Object.entries(formData).map(([key, value]) => {
        if (!value) return null;

        const hasData = Object.values(value).some(
          (val) => typeof val === "string" && val.trim() !== ""
        );

        if (!hasData) return null;

        return (
          <div key={key} className={section.bodyClass}>
            <h2 className={section.titleClass}>
              {key}
            </h2>

            <div className={section.lineClass} />

            <ul className={section.listClass}>
              {Object.entries(value).map(([key1, value1]) => {
                if (typeof value1 !== "string" || !value1.trim()) return null;

                return (
                  <li key={key1} className={section.bulletClass}>
                    {value1}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default TemplateSection;