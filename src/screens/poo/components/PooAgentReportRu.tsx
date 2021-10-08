import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts } from '../../../theme';
import { SimpleList } from '../../../ui-kit/Lists';
import Paper from '../../../ui-kit/Paper';

const PooAgentReportRu: FC = () => {
  return (
    <View style={styles.container}>
      <Paper title="Погода" titleStyle={fonts.bodySemibold}>
        <SimpleList>
          <SimpleList.Item title="Температура" value="-27" />
          <SimpleList.Item title="Осадки" value="Туман / иней" hideBorder />
        </SimpleList>
      </Paper>

      <Paper title="Верхняя поверхность крыла" titleStyle={fonts.bodySemibold}>
        <SimpleList>
          <SimpleList.Item title="Метод ПОО" value="1-ступенчатая" />
          <SimpleList.Item title="Тип жидкости" value="I" />
          <SimpleList.Item title="Концентрация раствора (Type I : Вода)" value="30:70" />
          <SimpleList.Item title="Наименование" value="PRIMER" hideBorder />
        </SimpleList>
      </Paper>

      <Paper title="Верхняя поверхность стабилизатора" titleStyle={fonts.bodySemibold}>
        <SimpleList>
          <SimpleList.Item title="Метод ПОО" value="2-ступенчатая" />
          <SimpleList.Item title="Тип жидкости" value="IV" />
          <SimpleList.Item title="Концентрация" value="100" />
          <SimpleList.Item title="Наименование" value="PRIMER2" hideBorder />
        </SimpleList>
      </Paper>
    </View>
  );
};

export default PooAgentReportRu;

const styles = StyleSheet.create({
  container: {},
});
