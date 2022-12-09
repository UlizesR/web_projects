# Generated by Django 4.1.3 on 2022-11-10 03:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='business',
            name='slug',
            field=models.CharField(blank=True, max_length=100, null=True, unique=True),
        ),
        migrations.AddField(
            model_name='category',
            name='slug',
            field=models.CharField(blank=True, max_length=100, null=True, unique=True),
        ),
    ]
