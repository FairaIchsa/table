from django.db import models


class Note(models.Model):
    class Meta:
        ordering = ['id']
        verbose_name = 'Note'
        verbose_name_plural = 'Table'

    date = models.DateField(verbose_name='Дата')
    name = models.CharField(verbose_name='Название', max_length=255)
    quantity = models.PositiveIntegerField(verbose_name='Количество', default=0)
    distance = models.DecimalField(verbose_name='Расстояние', max_digits=8, decimal_places=2, default=0)

    def __str__(self):
        return f"Note {self.id}, {self.name}"
