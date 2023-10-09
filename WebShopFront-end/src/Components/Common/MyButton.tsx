import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

interface MyButtonProps extends ButtonProps {
    // �������������� ��������, ���� ����������
}

const MyButton: React.FC<MyButtonProps> = (props) => {
    return (
        <Button
            {...props}
            sx={{
                transition: 'background-color 1s ease, color 1s ease',
                //...props.sx // ��������� ��� ���������� ������ ����� ����� props
            }}
        />
    );
};

export default MyButton;
