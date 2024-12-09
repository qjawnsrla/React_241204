import styled, { css } from "styled-components";
const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "bussiness",
    text: "비즈니스",
  },
  {
    name: "entertainmnet",
    text: "엔터",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "sport",
    text: "스포츠",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  // 화면 너비가 768픽셀 이하 적용
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto; //가로축에서 요소의 컨텐츠가 부모 요소의 너비를 초과할 경우 스크롤바 생성
  }
`;

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre; // 공백이나 줄바꿈이 있는 경우 그대로 표시
  text-decoration: none;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }
  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22bbcf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};
export default Categories;
