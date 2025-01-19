import { motion, AnimatePresence } from "framer-motion";
import Input from "./input";
import Dropdown from "./dropdown";
import AddButton from "./add-button";
import Title from "./title";
import BinButton from "./bin-button";

const Languages = ({
  languageProficiency,
  languages,
  addLanguages,
  updateLanguages,
  onClose,
  deleteLanguage,
}) => {
  return (
    <>
      <form
        noValidate
        className="flex flex-col items-end gap-6 ~sm/md:~pb-96/0"
      >
        <Title onClick={onClose} type="button" text="Languages" />
        <AddButton onClick={addLanguages} type="button" text="Add" />
        <AnimatePresence>
          {languages.map((i) => (
            <motion.div
              key={i.id}
              layout
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex w-full gap-4"
            >
              <Input
                onChange={(e) =>
                  updateLanguages(i.id, "language", e.target.value)
                }
                value={i.language}
                label="Language"
                type="text"
              />
              <Dropdown
                onChange={(e) =>
                  updateLanguages(i.id, "proficiency", e.target.value)
                }
                value={i.proficiency}
                placeholder="Proficiency"
                type={languageProficiency}
              />
              <BinButton onClick={() => deleteLanguage(i.id)} type="button" />
            </motion.div>
          ))}
        </AnimatePresence>
      </form>
    </>
  );
};

export default Languages;
