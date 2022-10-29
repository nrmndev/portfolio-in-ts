import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

import {
  dataGetSkillById,
  dataGetSkills,
} from "../../store/data/data-selector";
import { SkillsType } from "../../store/data/data-types";
import { useAppSelector, useAppDispatch } from "../../store/hooks/typedhooks";

import {
  dataAddSkill,
  dataClearSelectedSkillById,
  dataDeleteSkill,
  dataEnableSkillEditing,
  dataSetSelectedSkillById,
  dataUpdateSkillById,
} from "../../store/data/data-actions";
import SVGIcon, { SupportedIcons } from "../../components/svg-icons/svg-icons";

import { BsPencil, BsTrash } from "react-icons/bs";
import { StyledTable } from "./redux.styles";
import { FaSave, FaTimes } from "react-icons/fa";

const ReduxPlayground = () => {
  const dispatch = useAppDispatch();
  const [skillToEdit, setSkillToEdit] = useState<SkillsType>({} as SkillsType);

  const skillsData = useAppSelector(dataGetSkills);
  const selectedSkillToEdit = useAppSelector(dataGetSkillById);

  // const memoizeSkillEditing = useCallback(() => {
  //   dispatch(dataEnableSkillEditing());
  // }, [selectedSkillToEdit]);

  useEffect(() => {
    dispatch(dataEnableSkillEditing());
  }, []);
  useEffect(() => {
    setSkillToEdit(selectedSkillToEdit);
  }, [selectedSkillToEdit]);

  const [isEditInProgress, setIsEditInProgress] = useState<boolean>(false);
  const onDeleteSkill = (id: string) => {
    dispatch(dataDeleteSkill(id));
  };

  const onEditSkill = (id: string) => {
    dispatch(dataSetSelectedSkillById(id));
    setIsEditInProgress(true);
  };

  useEffect(() => {
    return () => {
      dispatch(dataEnableSkillEditing());
    };
  }, []);

  const onCancelEdit = () => {
    dispatch(dataClearSelectedSkillById());
    setIsEditInProgress(false);
  };
  const addToSkill = () => {
    const newSkill = {
      id: "S100",
      title: "Test Add Store",
      message: "Some message",
      description: "Some Description",
      svgIcon: "some Icon",
    };
    dispatch(dataAddSkill(newSkill));
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSkillToEdit((prev) => (prev = { ...prev, description: e.target.value }));
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkillToEdit((prev) => (prev = { ...prev, title: e.target.value }));
  };
  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSkillToEdit((prev) => (prev = { ...prev, svgIcon: e.target.value }));
  };
  const onSaveSkill = () => {
    dispatch(dataUpdateSkillById(skillToEdit));
    dispatch(dataClearSelectedSkillById());
    setIsEditInProgress(false);
  };
  return (
    <Container style={{ paddingTop: "8rem" }}>
      {/* <pre>{skillsData && JSON.stringify(skillsData, null, 5)}</pre> */}

      <button type="button" onClick={addToSkill}>
        Add Skill from Store
      </button>

      <Row>
        {skillsData.length > 0 && skillToEdit && (
          <StyledTable>
            <thead>
              <tr>
                <th>Icon</th>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {skillsData.map((skill: SkillsType) => {
                return (
                  <tr key={skill.title}>
                    {skill.id === skillToEdit.id ? (
                      <td>
                        <select
                          onChange={onChangeSelect}
                          defaultValue={skill.svgIcon}
                        >
                          {SupportedIcons.map((icon) => (
                            <option value={icon} key={icon}>
                              {icon}
                            </option>
                          ))}
                        </select>
                      </td>
                    ) : (
                      <td>
                        <SVGIcon icon={skill.svgIcon} />
                      </td>
                    )}
                    <td>
                      {skill.id === skillToEdit.id ? (
                        <input
                          type="text"
                          value={skillToEdit.title}
                          onChange={onChangeTitle}
                        />
                      ) : (
                        <h5>{skill.title}</h5>
                      )}
                    </td>
                    <td>
                      {skill.id === skillToEdit.id ? (
                        <textarea
                          value={skillToEdit.description}
                          onChange={onChangeDescription}
                          style={{ width: "100%" }}
                        />
                      ) : (
                        <p>
                          {skill.description &&
                            skill.description.slice(0, 97) + "..."}
                        </p>
                      )}
                    </td>
                    <td>
                      {!isEditInProgress && (
                        <>
                          <BsTrash
                            onClick={onDeleteSkill.bind(null, skill.id)}
                          />
                          <BsPencil
                            onClick={onEditSkill.bind(null, skill.id)}
                          />
                        </>
                      )}

                      {isEditInProgress && skill.id === skillToEdit.id && (
                        <>
                          <FaTimes onClick={onCancelEdit} />
                          <FaSave onClick={onSaveSkill} />
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </StyledTable>
        )}
      </Row>
    </Container>
  );
};

export default ReduxPlayground;
