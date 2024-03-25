import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 380px;
  height: 178px;

  border: 1px solid #d9d9d9;
  border-radius: 20px;

  padding: 12px 20px;
  line-height: initial;
`;

export const Container = styled.div`
  display: flex;
  gap: 12px;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 1;
  height: 95;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const BrandPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BrandText = styled.div`
  color: #8b8b8b;
  font-size: 12px;
`;

export const PackagesContent = styled.div`
  display: flex;
  justify-content: end;
`;

export const Text = styled.span`
  color: #000000;
  font-weight: 700;
  font-size: 14px;
`;
