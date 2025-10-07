import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import Category from './category.model';

@Table({
  tableName: 'books',
  timestamps: true,
})
export class Book extends Model {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  id!: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  author!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: true,
  })
  publisher!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  year!: number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  categoryId!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  summary!: string;
}

export default Book;