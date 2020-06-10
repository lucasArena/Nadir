import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateInspections1591707208792
  implements MigrationInterface {
  name = 'CreateInspections1591707208792';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'inspections',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'machine_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'article',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'tag',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'amountSamples',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'amountParts',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'palconstLength',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'statusPalconst',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'active',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'inspections',
      new TableForeignKey({
        name: 'inspection_user',
        columnNames: ['user_id'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'inspections',
      new TableForeignKey({
        name: 'inspection_machine',
        columnNames: ['machine_id'],
        referencedTableName: 'machines',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('inspections', 'inspection_user');
    await queryRunner.dropForeignKey('inspections', 'inspection_machine');
    await queryRunner.dropTable('inspections');
  }
}
