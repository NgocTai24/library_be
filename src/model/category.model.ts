import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'categories',
  timestamps: true,
})
export class Category extends Model {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  id!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  name!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description!: string;
}

export default Category;